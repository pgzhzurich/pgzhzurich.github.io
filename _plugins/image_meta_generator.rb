require 'time'

Jekyll::Hooks.register :site, :pre_render do |site|
  img_dir = File.join(site.source, '_data', 'img')
  next unless Dir.exist?(img_dir)

  begin
    require 'exifr/jpeg'
    has_exifr = true
  rescue LoadError
    has_exifr = false
    Jekyll.logger.warn "ImageMeta:", "exifr gem not found. Run: bundle install"
  end

  entries = Dir.glob(File.join(img_dir, '*'))
    .select { |f| File.file?(f) && f.match?(/\.(jpg|jpeg|png)$/i) }
    .map do |path|
      filename = File.basename(path)
      title = filename
        .sub(/\.[^.]+$/, '')      # remove extension
        .gsub(/_\d+$/, '')        # remove trailing _1, _2, ...
        .gsub('_', ' ')           # replaces underscores with spaces
      date = nil

      if has_exifr && filename.match?(/\.(jpg|jpeg)$/i)
        begin
          exif = EXIFR::JPEG.new(path)
          date = exif.date_time_original || exif.date_time
        rescue => e
          Jekyll.logger.warn "ImageMeta:", "Could not read EXIF from #{filename}: #{e.message}"
        end
      end

      if date
        { 'file' => filename, 'date' => date.strftime('%Y-%m-%d'), 'year' => date.year.to_s, 'title' => title }
      else
        { 'file' => filename, 'date' => 'unknown', 'year' => 'unknown', 'title' => title }
      end
    end
    .sort_by { |e| e['date'] }

  site.data['images_list'] = entries
end

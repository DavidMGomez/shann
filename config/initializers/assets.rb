# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
Rails.application.config.assets.precompile += %w( bootstrap.css ) #Se precompilan los css
Rails.application.config.assets.precompile += %w( bootstrap-responsive.css ) 
Rails.application.config.assets.precompile += %w( style.css ) 
Rails.application.config.assets.precompile += %w( pluton.css ) 
Rails.application.config.assets.precompile += %w( jquery.cslider.css )
Rails.application.config.assets.precompile += %w( jquery.bxslider.css ) 
Rails.application.config.assets.precompile += %w( animate.css ) 
Rails.application.config.assets.precompile += %w( jquery.js )
Rails.application.config.assets.precompile += %w( jquery.mixitup.js )
Rails.application.config.assets.precompile += %w( bootstrap.js )
Rails.application.config.assets.precompile += %w( modernizr.custom.js )
Rails.application.config.assets.precompile += %w( jquery.bxslider.js )
Rails.application.config.assets.precompile += %w( jquery.cslider.js )
Rails.application.config.assets.precompile += %w( jquery.placeholder.js )
Rails.application.config.assets.precompile += %w(  jquery.inview.js )
Rails.application.config.assets.precompile += %w( app.js )
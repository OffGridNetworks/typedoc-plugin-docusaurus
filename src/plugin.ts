import * as path from 'path';

import { Component, ConverterComponent } from 'typedoc/dist/lib/converter/components';
import { Context } from 'typedoc/dist/lib/converter/context';
import { Converter } from 'typedoc/dist/lib/converter/converter';
import { Reflection } from 'typedoc/dist/lib/models/reflections/abstract';
import { OptionsReadMode } from 'typedoc/dist/lib/utils/options';
import { MarkdownTheme } from './theme/';

/**
 * Markdown plugin component that exposes the MarkdownTheme to the application.
 */
@Component({ name: 'docusaurus' })
export class MarkdownPlugin extends ConverterComponent {

  // the expected name of the theme
  private THEME_NAME = 'markdown';

  // listen to event on initialisation
  public initialize() {
    this.listenTo(this.owner, {
      [Converter.EVENT_RESOLVE_BEGIN]: this.onBegin,
    });
  }

  /**
   * * Triggered when the converter begins converting a project.
   */
  private onBegin(context: Context, reflection: Reflection) {

    // renderer
    const renderer = this.application.renderer;

    // store options
    const options = this.application.options;
    options.read({}, OptionsReadMode.Prefetch);

    // assign the theme
    const themeName = options.getValue('theme');
    const themePath = this.getThemeDirectory();

    // apply the theme
    if (themeName === this.THEME_NAME) {
      const markdownTheme = new MarkdownTheme(renderer, themePath, options.getRawValues());
      renderer.theme = renderer.addComponent('theme', markdownTheme);
    } else {
      this.application.logger.log('To generate markdown please set option --theme markdown');
    }
  }

  /**
   * Returns the theme directory
   */
  private getThemeDirectory() {
    return path.join(__dirname, './theme/');
  }

}

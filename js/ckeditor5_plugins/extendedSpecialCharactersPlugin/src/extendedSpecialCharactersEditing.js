import { Plugin } from 'ckeditor5/src/core';
import { toWidget, toWidgetEditable } from 'ckeditor5/src/widget';
import { Widget } from 'ckeditor5/src/widget';
import InsertExtendedSpecialCharactersCommand from './insertExtendedSpecialCharactersCommand';

// cSpell:ignore extendedspecialcharacters insertextendedspecialcharacterscommand

/**
 * CKEditor 5 plugins do not work directly with the DOM. They are defined as
 * plugin-specific data models that are then converted to markup that
 * is inserted in the DOM.
 *
 * CKEditor 5 internally interacts with ExtendedSpecialCharacters as this model:
 * <ExtendedSpecialCharacters>
 *    <ExtendedSpecialCharactersTitle></ExtendedSpecialCharactersTitle>
 *    <ExtendedSpecialCharactersDescription></ExtendedSpecialCharactersDescription>
 * </ExtendedSpecialCharacters>
 *
 * Which is converted for the browser/user as this markup
 * <section class="simple-box">
 *   <h2 class="simple-box-title"></h1>
 *   <div class="simple-box-description"></div>
 * </section>
 *
 * This file has the logic for defining the ExtendedSpecialCharacters model, and for how it is
 * converted to standard DOM markup.
 */
export default class ExtendedSpecialCharactersEditing extends Plugin {
  static get requires() {
    return [Widget];
  }

  init() {
    this._defineSchema();
    this._defineConverters();
    this.editor.commands.add(
      'insertExtendedSpecialCharacters',
      new InsertExtendedSpecialCharactersCommand(this.editor),
    );
  }

  /*
   * This registers the structure that will be seen by CKEditor 5 as
   * <ExtendedSpecialCharacters>
   *    <ExtendedSpecialCharactersTitle></ExtendedSpecialCharactersTitle>
   *    <ExtendedSpecialCharactersDescription></ExtendedSpecialCharactersDescription>
   * </ExtendedSpecialCharacters>
   *
   * The logic in _defineConverters() will determine how this is converted to
   * markup.
   */
  _defineSchema() {
    // Schemas are registered via the central `editor` object.
    const schema = this.editor.model.schema;

    schema.register('ExtendedSpecialCharacters', {
      // Behaves like a self-contained object (e.g. an image).
      isObject: true,
      // Allow in places where other blocks are allowed (e.g. directly in the root).
      allowWhere: '$block',
    });

    schema.register('ExtendedSpecialCharactersTitle', {
      // This creates a boundary for external actions such as clicking and
      // and keypress. For example, when the cursor is inside this box, the
      // keyboard shortcut for "select all" will be limited to the contents of
      // the box.
      isLimit: true,
      // This is only to be used within ExtendedSpecialCharacters.
      allowIn: 'ExtendedSpecialCharacters',
      // Allow content that is allowed in blocks (e.g. text with attributes).
      allowContentOf: '$block',
    });

    schema.register('ExtendedSpecialCharactersDescription', {
      isLimit: true,
      allowIn: 'ExtendedSpecialCharacters',
      allowContentOf: '$root',
    });

    schema.addChildCheck((context, childDefinition) => {
      // Disallow ExtendedSpecialCharacters inside ExtendedSpecialCharactersDescription.
      if (
        context.endsWith('ExtendedSpecialCharactersDescription') &&
        childDefinition.name === 'ExtendedSpecialCharacters'
      ) {
        return false;
      }
    });
  }

  /**
   * Converters determine how CKEditor 5 models are converted into markup and
   * vice-versa.
   */
  _defineConverters() {
    // Converters are registered via the central editor object.
    const { conversion } = this.editor;

    // Upcast Converters: determine how existing HTML is interpreted by the
    // editor. These trigger when an editor instance loads.
    //
    // If <span class="special-character"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ExtendedSpecialCharacters> model.
    conversion.for('upcast').elementToElement({
      model: 'ExtendedSpecialCharacters',
      view: {
        name: 'span',
        classes: 'special-character',
      },
    });

    // If <h2 class="simple-box-title"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ExtendedSpecialCharactersTitle> model, provided it is a child element of <ExtendedSpecialCharacters>,
    // as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ExtendedSpecialCharactersTitle',
      view: {
        name: 'h2',
        classes: 'simple-box-title',
      },
    });

    // If <h2 class="simple-box-description"> is present in the existing markup
    // processed by CKEditor, then CKEditor recognizes and loads it as a
    // <ExtendedSpecialCharactersDescription> model, provided it is a child element of
    // <ExtendedSpecialCharacters>, as required by the schema.
    conversion.for('upcast').elementToElement({
      model: 'ExtendedSpecialCharactersDescription',
      view: {
        name: 'div',
        classes: 'simple-box-description',
      },
    });

    // Data Downcast Converters: converts stored model data into HTML.
    // These trigger when content is saved.
    //
    // Instances of <ExtendedSpecialCharacters> are saved as
    // <section class="simple-box">{{inner content}}</section>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ExtendedSpecialCharacters',
      view: {
        name: 'span',
        classes: 'special-character',
      },
    });

    // Instances of <ExtendedSpecialCharactersTitle> are saved as
    // <h2 class="simple-box-title">{{inner content}}</h2>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ExtendedSpecialCharactersTitle',
      view: {
        name: 'h2',
        classes: 'simple-box-title',
      },
    });

    // Instances of <ExtendedSpecialCharactersDescription> are saved as
    // <div class="simple-box-description">{{inner content}}</div>.
    conversion.for('dataDowncast').elementToElement({
      model: 'ExtendedSpecialCharactersDescription',
      view: {
        name: 'div',
        classes: 'simple-box-description',
      },
    });

    // Editing Downcast Converters. These render the content to the user for
    // editing, i.e. this determines what gets seen in the editor. These trigger
    // after the Data Upcast Converters, and are re-triggered any time there
    // are changes to any of the models' properties.
    //
    // Convert the <ExtendedSpecialCharacters> model into a container widget in the editor UI.
    conversion.for('editingDowncast').elementToElement({
      model: 'ExtendedSpecialCharacters',
      view: (modelElement, { writer: viewWriter }) => {
        const section = viewWriter.createContainerElement('span', {
          class: 'special-character',
        });

        return toWidget(section, viewWriter, { label: 'extended special character widget' });
      },
    });

    // Convert the <ExtendedSpecialCharactersTitle> model into an editable <h2> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ExtendedSpecialCharactersTitle',
      view: (modelElement, { writer: viewWriter }) => {
        const h2 = viewWriter.createEditableElement('h2', {
          class: 'simple-box-title',
        });
        return toWidgetEditable(h2, viewWriter);
      },
    });

    // Convert the <ExtendedSpecialCharactersDescription> model into an editable <div> widget.
    conversion.for('editingDowncast').elementToElement({
      model: 'ExtendedSpecialCharactersDescription',
      view: (modelElement, { writer: viewWriter }) => {
        const div = viewWriter.createEditableElement('div', {
          class: 'simple-box-description',
        });
        return toWidgetEditable(div, viewWriter);
      },
    });
  }
}

/**
 * @file defines InsertExtendedSpecialCharactersCommand, which is executed when the ExtendedSpecialCharacters
 * toolbar button is pressed.
 */
// cSpell:ignore extendedspecialcharactersediting

import { Command } from 'ckeditor5/src/core';

export default class InsertExtendedSpecialCharactersCommand extends Command {
  execute() {
    const { model } = this.editor;

    model.change((writer) => {
      // Insert <ExtendedSpecialCharacters>*</ExtendedSpecialCharacters> at the current selection position
      // in a way that will result in creating a valid model structure.
      model.insertContent(createExtendedSpecialCharacters(writer));
    });
  }

  refresh() {
    const { model } = this.editor;
    const { selection } = model.document;

    // Determine if the cursor (selection) is in a position where adding a
    // ExtendedSpecialCharacters is permitted. This is based on the schema of the model(s)
    // currently containing the cursor.
    const allowedIn = model.schema.findAllowedParent(
      selection.getFirstPosition(),
      'ExtendedSpecialCharacters',
    );

    // If the cursor is not in a location where a ExtendedSpecialCharacters can be added, return
    // null so the addition doesn't happen.
    this.isEnabled = allowedIn !== null;
  }
}

function createExtendedSpecialCharacters(writer) {
  // Create instances of the three elements registered with the editor in
  // extendedspecialcharactersediting.js.
  const ExtendedSpecialCharacters = writer.createElement('ExtendedSpecialCharacters');
  const ExtendedSpecialCharactersTitle = writer.createElement('ExtendedSpecialCharactersTitle');
  const ExtendedSpecialCharactersDescription = writer.createElement('ExtendedSpecialCharactersDescription');

  // Append the title and description elements to the ExtendedSpecialCharacters, which matches
  // the parent/child relationship as defined in their schemas.
  writer.append(ExtendedSpecialCharactersTitle, ExtendedSpecialCharacters);
  writer.append(ExtendedSpecialCharactersDescription, ExtendedSpecialCharacters);

  // The ExtendedSpecialCharactersDescription text content will automatically be wrapped in a
  // `<p>`.
  writer.appendElement('paragraph', ExtendedSpecialCharactersDescription);

  // Return the element to be added to the editor.
  return ExtendedSpecialCharacters;
}

import { LexicalComposer } from 'lexical-solid/LexicalComposer';
import { PlainTextPlugin } from 'lexical-solid/LexicalPlainTextPlugin';
import { ContentEditable } from 'lexical-solid/LexicalContentEditable';
import { LexicalErrorBoundary } from 'lexical-solid/LexicalErrorBoundary';

function Editor() {
  return (
    <LexicalComposer
      initialConfig={{
        namespace: 'lexical',
        onError(error) {
          throw error;
        },
      }}
    >
      <div class="editor-container">
        <PlainTextPlugin
          errorBoundary={LexicalErrorBoundary}
          contentEditable={<ContentEditable class="editor-input" />}
          placeholder={<div class="editor-placeholder">What's happening?</div>}
        />
      </div>
    </LexicalComposer>
  );
}

export default Editor;

<template>
  <div class="editor-block">
    <editor-menu-bar
      class="menubar"
      :editor="editor"
    >
      <div
        slot-scope="{ commands, isActive }"
        class="menubar__button"
      >
        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <icon name="undo" />
        </button>
        <button
          class="menubar__button"
          @click="commands.undo"
        >
          <icon name="redo" />
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          Bold
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          Italic
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.stike"
        >
          Strike
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          Underline
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          Underline
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          Code
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          Paragraph
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({level: 1}) }"
          @click="commands.heading({level: 1})"
        >
          H1
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({level: 2}) }"
          @click="commands.heading({level: 2})"
        >
          H2
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({level: 3}) }"
          @click="commands.heading({level: 3})"
        >
          H3
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          bullet list
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          list
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          code
        </button>
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          code
        </button>
        <button
          class="menubar__button"
          @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
        >
          Table
        </button>
      </div>
    </editor-menu-bar>
    <editor-content
      class="editor__content"
      :editor="editor"
    />
  </div>
</template>

<script>
// Import the editor
import Icon from '@/components/Icon'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  name: 'EditorBlock',
  components: {
    Icon,
    EditorContent,
    EditorMenuBar,
    Blockquote,
    CodeBlock,
    HardBreak,
    Heading,
    OrderedList,
    BulletList,
    ListItem,
    TodoItem,
    TodoList,
    Bold,
    Code,
    Italic,
    Link,
    Strike,
    Underline,
    History
  },
  data () {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `<h1>Type your content here!</h1>`
      })
    }
  },
  mounted () {
    // this.editor = new Editor()
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

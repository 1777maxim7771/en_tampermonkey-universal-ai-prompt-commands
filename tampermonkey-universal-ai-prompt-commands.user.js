// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands EN
// @namespace    local.tampermonkey.universal.ai.prompt.commands.en
// @version      1.1.0
// @description  English version: replaces universal Q1-Q10 triggers with ready-made AI prompts for fast input in AI chats
// @author       1777maxim7771
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    /*
        Tampermonkey Universal AI Prompt Commands EN

        Purpose:
        This script helps you work faster in AI chats such as ChatGPT, Gemini, Claude, Copilot and other websites with text input fields.
        It replaces the universal short triggers Q1-Q10 with prepared long AI prompts.

        Important:
        The triggers Q1-Q10 are not tied to any language. You can replace them with your own commands, words or phrases.
        Replacement happens only when the whole input field exactly matches a trigger.
    */

    const COMMANDS = {
        'Q1': `Translate the provided text fully and accurately into English.
Preserve the meaning, order of information, names, dates, amounts, document numbers, organization names and important wording.
If the text contains official or legal expressions, translate them clearly without changing the meaning.
Do not add your own conclusions, do not shorten the text and do not change the content.`,

        'Q2': `Summarize the provided text in English according to its meaning and context.
Explain what the text is about, who is writing or informing whom, what the topic is, what the main content is, and which requirements, requests, decisions, dates, deadlines, amounts or important details are mentioned.
Write clearly and simply without unnecessary reasoning.`,

        'Q3': `Create a short thematic summary of the letter in English in exactly one line.
In that one line, mention who the letter is from, what the topic is, what is being communicated or requested, and which important dates, deadlines, amounts, documents or actions are mentioned.`,

        'Q4': `Translate the provided text into simple and clear German at A2-B1 level.
Make the text polite, official and grammatically correct.
Preserve the original meaning, dates, names, amounts, addresses, organization names and important details.
Do not use overly complicated German wording.`,

        'Q5': `Correct the provided English text.
Make it grammatically correct, clear and logical while preserving the original meaning.
Remove mistakes, repetitions, awkward wording and overly informal parts.
If the text is intended for a letter, make it more polite and official.
Do not add facts that are not present in the original text.`,

        'Q6': `Write a short, polite and official reply to this letter in English.
The answer should be clear and to the point, without unnecessary phrases.
If it is necessary to confirm receipt, clarify documents, ask for an explanation or provide information, formulate it correctly.
Add a polite closing at the end.`,

        'Q7': `Explain in simple English what this text means.
Analyze the meaning in context: who is writing, what the issue is, what is requested, what needs to be done, and which deadlines, dates, amounts, documents or conditions are important.
State separately whether the text contains a requirement, warning, request, decision or only information.`,

        'Q8': `Extract all important facts from the provided text and structure them in English.
List separately: people’s names, organizations, addresses, dates, deadlines, amounts, document numbers, requirements, decisions, obligations, mentioned documents and next steps.
Do not invent information that is not in the text. If information is missing, write: not specified.`,

        'Q9': `Create a clear list of actions in English that need to be completed based on this text.
Identify what must be done, which documents should be prepared, who should be answered, where to contact, which deadlines must be observed and what to pay attention to.
Divide the actions by priority: urgent, important, can be done later.`,

        'Q10': `Create a polite official letter in German based on the provided text.
The letter should be simple, clear and correct, at A2-B1 level.
Preserve all important facts: names, dates, amounts, addresses, organization names, document numbers and circumstances.
Structure: salutation, short explanation of the situation, main request or message, request for confirmation or clarification if needed, closing.
End with: Mit freundlichen Grüßen`
    };

    const EDITABLE_SELECTORS = ['textarea', 'input[type="text"]', 'input[type="search"]', '[contenteditable="true"]', '[contenteditable="plaintext-only"]', '[role="textbox"]'];

    function isEditableElement(element) {
        if (!element || !element.matches) return false;
        if (element.disabled || element.readOnly) return false;
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        const inputType = (element.getAttribute('type') || '').toLowerCase();
        if (tagName === 'input' && !['text', 'search'].includes(inputType)) return false;
        return EDITABLE_SELECTORS.some(selector => element.matches(selector));
    }

    function findEditableElement(target) {
        if (!target) return null;
        if (isEditableElement(target)) return target;
        if (target.closest) {
            const element = target.closest(EDITABLE_SELECTORS.join(','));
            if (isEditableElement(element)) return element;
        }
        return null;
    }

    function getText(element) {
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        if (tagName === 'textarea' || tagName === 'input') return element.value || '';
        return element.innerText || element.textContent || '';
    }

    function normalizeCommand(text) {
        return String(text || '').trim().replace(/\s+/g, '').toUpperCase();
    }

    function setCursorToEnd(element) {
        element.focus();
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        if (tagName === 'textarea' || tagName === 'input') {
            const length = element.value.length;
            element.setSelectionRange(length, length);
            return;
        }
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(element);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    function dispatchInputEvents(element, text) {
        try {
            element.dispatchEvent(new InputEvent('input', { bubbles: true, cancelable: true, inputType: 'insertReplacementText', data: text }));
        } catch (error) {
            element.dispatchEvent(new Event('input', { bubbles: true }));
        }
        element.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function replaceText(element, newText) {
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        element.focus();
        if (tagName === 'textarea' || tagName === 'input') {
            element.value = newText;
            setCursorToEnd(element);
            dispatchInputEvents(element, newText);
            return;
        }
        try {
            const range = document.createRange();
            const selection = window.getSelection();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('insertText', false, newText);
        } catch (error) {
            element.textContent = newText;
        }
        setCursorToEnd(element);
        dispatchInputEvents(element, newText);
    }

    function showNotification(message) {
        const oldBox = document.getElementById('tampermonkey-universal-ai-prompt-commands-notification');
        if (oldBox) oldBox.remove();
        const box = document.createElement('div');
        box.id = 'tampermonkey-universal-ai-prompt-commands-notification';
        box.textContent = message;
        box.style.position = 'fixed';
        box.style.right = '20px';
        box.style.bottom = '20px';
        box.style.zIndex = '999999';
        box.style.background = '#111';
        box.style.color = '#fff';
        box.style.padding = '12px 18px';
        box.style.borderRadius = '10px';
        box.style.fontSize = '14px';
        box.style.fontFamily = 'Arial, sans-serif';
        box.style.boxShadow = '0 4px 12px rgba(0,0,0,0.35)';
        document.body.appendChild(box);
        setTimeout(() => box.remove(), 2200);
    }

    function checkAndReplace(target) {
        const editable = findEditableElement(target);
        if (!editable) return;
        const command = normalizeCommand(getText(editable));
        if (!Object.prototype.hasOwnProperty.call(COMMANDS, command)) return;
        replaceText(editable, COMMANDS[command]);
        showNotification(`Trigger ${command} replaced with a ready-made AI prompt`);
    }

    document.addEventListener('input', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('keyup', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('paste', event => setTimeout(() => checkAndReplace(event.target), 50), true);
})();
// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands EN
// @namespace    local.tampermonkey.universal.ai.prompt.commands.en
// @version      1.1.0
// @description  English version: replaces short commands E1-E10 with prepared English AI prompts for fast input in AI chats
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
        This script helps you work faster with AI chats.
        The user enters a short command E1-E10, and the script replaces it
        with a full prepared prompt in English.

        Example:
        E1 -> full prompt for an accurate translation into Russian.

        Important:
        The script replaces only exact commands. Normal text is not changed.
    */

    const COMMANDS = {
        'E1': `Translate the provided text fully and accurately into Russian.
Preserve the meaning, order of information, names, dates, amounts, document numbers, organization names and important wording.
If the text contains official or legal expressions, translate them clearly without changing the meaning.
Do not add your own conclusions, do not shorten the text and do not change the content.`,

        'E2': `Summarize the provided text in Russian according to its meaning and context.
Explain what the text is about, who is writing or reporting to whom, what the subject is and what the main content is.
Separately mention requirements, requests, decisions, dates, deadlines, amounts and important details.
Write in simple and clear language, without unnecessary reasoning.`,

        'E3': `Create a short thematic summary of the letter in Russian, strictly in one line.
In this one line, mention: who the letter is from, what the issue is, what is reported or required, and which important dates, deadlines, amounts, documents or actions are mentioned.
The result must be short but informative.`,

        'E4': `Translate the provided text into simple and understandable German at A2-B1 level.
Make the text polite, official and grammatically correct.
Preserve the original meaning, dates, names, amounts, addresses, organization names and important details.
Do not use overly complicated German wording.`,

        'E5': `Correct the provided Russian text.
Make it grammatically correct, clear and logical, while preserving my original meaning.
Remove mistakes, repetitions, weak wording and overly colloquial parts.
If the text is intended for a letter, make it more polite and official.
Do not add facts that are not present in the original text.`,

        'E6': `Write a short, polite and official reply to this letter in German.
The reply should be simple, at A2-B1 level.
Take the content of the letter into account and answer directly, without unnecessary phrases.
If it is necessary to confirm receipt, clarify documents, request an explanation or provide information, formulate it correctly.
Add at the end: Mit freundlichen Grüßen`,

        'E7': `Explain in simple Russian what this text means.
Analyze the meaning according to the context: who is writing, about what issue, what is requested, what needs to be done, and which deadlines, dates, amounts, documents or conditions are important.
If the text is official, explain it in normal everyday language.
Separately state whether the text contains a demand, warning, request, decision or only information.`,

        'E8': `Extract all important facts from the provided text and structure them in Russian.
Separately list: people names, organizations, addresses, dates, deadlines, amounts, document numbers, requirements, decisions, obligations, mentioned documents and further necessary steps.
Do not invent data that is not in the text.
If information is missing, write: not specified.`,

        'E9': `Create a clear list in Russian of the actions that must be completed based on this text.
Determine what needs to be done, which documents must be prepared, who should be answered, where to apply, which deadlines must be observed and what needs attention.
Divide the actions by priority: urgent, important, can be done later.
If it is not clear from the text what exactly must be done, list the questions that need clarification.`,

        'E10': `Create a polite official letter in German based on the provided text.
The letter should be simple, clear and correct, at A2-B1 level.
Preserve all important facts: names, dates, amounts, addresses, organization names, document numbers and circumstances.
Letter structure: greeting, short explanation of the situation, main request or message, if necessary request for confirmation or clarification, closing.
Add at the end: Mit freundlichen Grüßen`
    };

    const EDITABLE_SELECTORS = [
        'textarea',
        'input[type="text"]',
        'input[type="search"]',
        '[contenteditable="true"]',
        '[contenteditable="plaintext-only"]',
        '[role="textbox"]'
    ];

    function isEditableElement(element) {
        if (!element || !element.matches) return false;
        if (element.disabled || element.readOnly) return false;

        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        const inputType = (element.getAttribute('type') || '').toLowerCase();

        if (tagName === 'input') {
            const allowedInputTypes = ['text', 'search'];
            if (!allowedInputTypes.includes(inputType)) return false;
        }

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
        if (!element) return '';
        const tagName = element.tagName ? element.tagName.toLowerCase() : '';
        if (tagName === 'textarea' || tagName === 'input') return element.value || '';
        return element.innerText || element.textContent || '';
    }

    function normalizeCommand(text) {
        return text.trim().replace(/\s+/g, '').toUpperCase();
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
            element.dispatchEvent(new InputEvent('input', {
                bubbles: true,
                cancelable: true,
                inputType: 'insertReplacementText',
                data: text
            }));
        } catch (error) {
            element.dispatchEvent(new Event('input', { bubbles: true }));
        }

        element.dispatchEvent(new Event('change', { bubbles: true }));
    }

    function replaceText(element, newText) {
        if (!element) return;
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
        box.style.maxWidth = '420px';
        box.style.lineHeight = '1.4';
        document.body.appendChild(box);
        setTimeout(() => box.remove(), 2200);
    }

    function checkAndReplace(target) {
        const editable = findEditableElement(target);
        if (!editable) return;

        const currentText = getText(editable);
        const command = normalizeCommand(currentText);

        if (!Object.prototype.hasOwnProperty.call(COMMANDS, command)) return;

        replaceText(editable, COMMANDS[command]);
        showNotification(`Command ${command} was replaced with a prepared prompt`);
    }

    document.addEventListener('input', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('keyup', event => setTimeout(() => checkAndReplace(event.target), 20), true);
    document.addEventListener('paste', event => setTimeout(() => checkAndReplace(event.target), 50), true);
})();
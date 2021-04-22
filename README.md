# Event Handling in jQuery

## Pluralsight: Event Handling in jQuery

Open your web browser and immediately you’ve triggered an event. With every opening of a page, click of a button, or movement of the mouse, you’ve probably triggered dozens of events. Ever get prompted that you’ll be logged out of a site due to inactivity? You can even trigger an event by doing nothing for just long enough.

Welcome to the world of browser based events. In this course, Event Handling in jQuery, you’ll learn the basics of event driven programming that will enable you to create more engaging and responsive web applications.

First, you’ll explore the jQuery Event object, and the cross-browser compatibility advantages of jQuery. Next, you’ll discover many of the available event listeners and event helpers that jQuery provides.

Finally, you’ll learn how to create and customize browser based event handling. When you’re finished with this course, you’ll have the skills and knowledge of jQuery Events needed to build truly interactive web applications.

## Project Setup

For the most part all the project files should be able to be opened and interacted with using just the index.html page. Both the jQuery and Bootstrap dependencies are loaded via CDN.

The [Global Ajax Events](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-global-ajax-event-handlers) project, in order to make Ajax requests, you'll need to use Visual Studio Code's [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension. The `Live Server` will allow you to launch a local development server with live reloading of the index.html page. This avoids the Ajax request being blocked for having a `null` origin when fetching the json data.

## Project Files

### Understanding Event Driven Programming

| Clip                                  | Project File                                                                                                                    |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| Introducing Event Handlers            | [native-event-handler-behaviors](https://github.com/Coderrob/event-handling-in-jquery/tree/main/native-event-handler-behaviors) |
| Understanding Event Propagation       | [native-event-propagation](https://github.com/Coderrob/event-handling-in-jquery/tree/main/native-event-propagation)             |
| Understanding Event Delegation        | [jquery-html-event-delegation](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-html-event-delegation)     |
| Creating and Publishing Custom Events | [native-custom-events](https://github.com/Coderrob/event-handling-in-jquery/tree/main/native-custom-events)                     |

### Introduction to jQuery Events

| Clip                                  | Project File                                                                                                                          |
| :------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| Attaching jQuery Event Handlers       | [jquery-one-event-helper](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-one-event-helper)                     |
|                                       | [jquery-event-handler-data-passing](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-event-handler-data-passing) |
|                                       | [jquery-delegated-event-handlers](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-delegated-event-handlers)     |
| Creating and Triggering jQuery Events | [jquery-event-trigger-data-passing](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-event-trigger-data-passing) |
| Namespacing jQuery Events             | [jquery-namespace-event-handlers](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-namespace-event-handlers)     |

### Using jQuery Events

| Clip                | Project File                                                                                                                            |
| :------------------ | :-------------------------------------------------------------------------------------------------------------------------------------- |
| Mouse Button Events | [jquery-mouse-button-event-handlers](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-mouse-button-event-handlers) |
| Mouse Cursor Events | [jquery-mouse-cursor-event-handlers](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-mouse-cursor-event-handlers) |
| Keyboard Events     | [jquery-keyboard-event-handlers](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-keyboard-event-handlers)         |
| Form Events         | [jquery-form-event-handlers](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-form-event-handlers)                 |
| Global Ajax Events  | [jquery-global-ajax-event-handlers](https://github.com/Coderrob/event-handling-in-jquery/tree/main/jquery-global-ajax-event-handlers)   |

## MIT License

Copyright (c) 2021 Rob Lindley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

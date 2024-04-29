type Messages = typeof import('./src/shared/messages/en.json');
type RuMessages = typeof import('./src/shared/messages/ru.json');

declare interface IntlMessages extends Messages, RuMessages {}

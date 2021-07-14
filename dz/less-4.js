const text = `'Прямая речь' 
 слова без кавычек 
'Опять Прямая речь'
текст любой длины текст любой длины текст любой длины текст любой длины
'Снова Прямая речь'
don't, aren't
`;

const regexp = /^'|(\s)'|'(\s)|'$/g;

console.log(text.match(regexp)); // Вывод фильтра
//console.log(text.replace(regexp, '$1"$2'));
start = _ stylesheet

stylesheet = statement* { return { stylesheet: statement }; }

statement
  = selector_block / event_function / tunnel / conditional / comment { return statement; }

selector_block
  = _ selector _ "{" _ property_declaration* _ "}" _ { return { selector: selector, properties: property_declaration }; }

selector
  = _ selector_type string index* attribute_selector* pseudo_class* { return { type: selector_type, name: string, indices: index, attributes: attribute_selector, pseudoClasses: pseudo_class }; }

attribute_selector
  = "[" _ [a-zA-Z0-9]* _ "=" _  [a-zA-Z0-9"']* _ "]" { return { attribute: text() }; }

property_declaration
  = _ property _ "=" _ value _ ";" { return { property: property, value: value }; }

property
  = string { return text(); }

value
  = _ ( string / number / arrow_function / number_unit / style_function / general ) _ { return text(); }

arrow_function
  = "(" _ selector _ ")->" javaScriptStyleElement { return { arrowFunction: text() }; }

javaScriptStyleElement
  = [a-zA-Z]* { return text(); }

selector_type
  = [#.@:]* { return text(); }

number
  = [0-9]* { return parseInt(text(), 10); }

string
  = [a-zA-Z0-9-]* { return text(); }

word
  = [a-zA-Z-]* { return text(); }

number_unit
  = number string { return { number: number, unit: string }; }

style_function
  = string _ "(" _ multi_comma _ ")" _ { return { function: string, arguments: multi_comma }; }

multi_comma
  =  ( _ value _ "," )* { return text().split(','); }

index
  = "[" _ [0-9]* _ "]" { return parseInt(text(), 10); }

_ "whitespace"
  = [ \t\n\r]*

simple_selector
  = "(" selector_type string ")" { return { type: selector_type, name: string }; }

pseudo_class
  = _ (":" / "::") string _ { return text(); }

general
  = [^;]* { return text(); }
event_function
  = 
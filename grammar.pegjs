start
  = _ stylesheet

stylesheet
  = statement*

statement
  = selector_block _
  / conditional
  / comment

selector_block
  = selector _ "{" _ (property_declaration / arrow_function)* _ "}" _

property_declaration
  = identifier _ "=" _  value _  ";" _

value
  = identifier
  / unit
  / number
  / color
  / string
  / function_call
  / arrow_function
  / unary_operation
  / binary_operation
  / js_style_elements

_ "whitespace"
  = [ \t\n\r]*

js_style_elements
  = [a-zA-Z0-9_]+

index
  = [0-9]+

unit
  = number [a-zA-Z_]+

string
  = "\"" (!"\"" .)* "\""

combined
  = number* / string* / color* / unit* / arrow_function* / unary_operation* / binary_operation* / function_call* / js_style_elements*

arrow_function
  = "(" selector ")" index* "-" ">" js_style_elements

unary_operation
  = "(" selector ")" ("+" / "-" / "?" / "!") ";"

binary_operation
  = "(" selector ")" ("+" / "-" / "?") "{" property_declaration* "}"

conditional
  = "if" "(" condition ")" "{" statement* "}" ("else" "{" statement* "}")?

condition
  = expression (comparison expression)?

expression
  = value
  / "(" condition ")"
  / function_call
  / identifier

comment
  = "//" (!"\n" .)*

identifier
  = [a-zA-Z][a-zA-Z0-9_]*

selector
  = [a-zA-Z#._>][a-zA-Z0-9#._>]* 

color
  = "#" [0-9a-fA-F]{6}/[0-9a-fA-F]{3}
  / function_call

number
  = "-"? [0-9]+ ("." [0-9]+)?

function_call
  = identifier "(" value ("," value)* ")"

comparison
  = ">=" / "<=" / "==" / ">" / "<"

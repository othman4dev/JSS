start
  = _ stylesheet

stylesheet
  = statement*

statement
  = selector_block _
  / event_function
  / conditional
  / comment

selector_block
  = selector _ "{" _ (property_declaration / arrow_function)* _ "}" _

event_function
  = "function" _ "event" _ "(" "(" _ selector _ ")" pseudo_class ")" _ "{" _ statement* _ "}" _

property_declaration
  = identifier _ "=" _  value _  ";" _

value
  = identifier
  / unit
  / number
  / color
  / string
  / arrow_function
  / unary_operation
  / binary_operation
  / js_style_elements
  / operation

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
  = number* / string* / color* / unit* / arrow_function* / unary_operation* / binary_operation* / js_style_elements*

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
  / identifier

comment
  = "//" (!"\n" .)*

identifier
  = [a-zA-Z][a-zA-Z0-9_]*

selector
  = [a-zA-Z#._>][a-zA-Z0-9#._>]* pseudo_class*

pseudo_class
  = ":" [a-zA-Z0-9_]+

color
  = "#" [0-9a-fA-F]{6}/[0-9a-fA-F]{3}

number
  = "-"? [0-9]+ ("." [0-9]+)?

comparison
  = ">=" / "<=" / "==" / ">" / "<"

operation
  =  " " _ value _ operator _ value _ ";"

operator
  = _ ("+" / "-" / "*" / "/") _
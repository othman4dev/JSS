start
  = _ stylesheet

stylesheet
  = statement*

statement
  = selector_block _
  / event_function
  / tunnel
  / conditional
  / comment

selector_block
  = selector _ "{" _ (property_declaration / arrow_function)* _ "}" _

event_function
  = "function" _ "event" _ "(" "(" _ selector _ ")" pseudo_class ")" _ "{" _ statement* _ "}" _

property_declaration
  = identifier _ "=" _  value _  ";" _

identifier
  = [a-zA-Z][a-zA-Z0-9_]*

value
  = string
  / unit
  / value_function
  / number
  / color
  / string
  / arrow_function
  / unary_operation
  / binary_operation
  / js_style_elements
  / operation
  / tunnel

_ "whitespace"
  = [ \t\n\r]*

js_style_elements
  = [a-zA-Z]+

index
  = "[" _ [0-9]+ _ "]"

value_function
  = [a-zA-Z0-9_]+ "(" _ ("-"* _ value _ ","*)* _ ")"

unit
  = '-'* number [a-zA-Z_%]+

string
  = "\"" (!"\"" .)* "\""

coefficient
  = [a-zA-Z_]+ "(" number  ")" _ ";" _

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

selector
  = [a-zA-Z#._>][a-zA-Z0-9#._>]* pseudo_class*

pseudo_class
  = ":" [a-zA-Z0-9_]+

color
  = "#" [0-9a-fA-F]{6} / "#" [0-9a-fA-F]{3}

number
  = "-"? [0-9]+ ("." [0-9]+)?

comparison
  = ">=" / "<=" / "==" / ">" / "<"

operation
  =  " " _ value _ operator _ value _ ";"

operator
  = _ ("+" / "-" / "*" / "/") _

tunnel
  = selector ":::" selector _ "{" _ coefficient* _ "}" _

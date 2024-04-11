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
  = arrow_function
  / value_function
  / general_sentence
  / unary_operation
  / binary_operation
  / operation

arrow_function
  = "(" selector ")" index* "-" ">" js_style_elements

general_sentence
  = [^;]*

_ "whitespace"
  = [ \t\n\r]*

js_style_elements
  = [a-zA-Z]+

index
  = "[" _ [0-9]+ _ "]"

multi_value
  = ( _ ([a-zA-Z]+ / [0-9]+ [a-zA-Z]* ) _ )*

value_function
  = [a-zA-Z0-9_]+ "(" _ ("-"* _ [a-zA-Z0-9_]+ _ ","*)* _ ")"

coefficient
  = [a-zA-Z_]+ "(" number  ")" _ ";" _

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
  = [a-zA-Z#._>*][a-zA-Z0-9#._>*]* pseudo_class*

pseudo_class
  = ":" [a-zA-Z0-9_]+

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
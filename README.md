# BrAlexie

Alexie Beans, Made for Brazil

## To-do

* Bootstrap front-end

* When menu item is clicked, show appropriate area

* Look at hashchange. Menu click -> change hash -> hashchange listener shows correct panels, tables, or forms

* Incorporate account types into a catchy name

* Assets: Bens e Direitos
* Expenses: Despesas
* Liabilities: Obrigações
* Income: Receitas
* Equity: Patrimônio Líquido

Transaction types:

* Despesa (Expense) [Debit Exp/Liab, Credit Asset/Liab]
* Receita (Income)  [Debit Asset,    Credit Inc]
* Criar bens (New asset) [Debit Asset, Credit Equity]
* Transferir bens   [Debit/Credit Asset]
* Outro (Other)     [Debit/Credit any]

### Menu

See `bootstrap-nav/fixed-top-nav.html`.


## Actions

* Account should have a balance field

* Expense accounts should have a (monthly) budget field, leave 0 to ignore

* Generic page to display transactions table

* Account types are fixed to the 5 above, has a numeric id, display name, and positive or negative sign.

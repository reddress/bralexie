# BrAlexie

Alexie accounts, Made for Brazil

## To-do

* clicking on account name opens account page with transactions list, named #conta_[id number], such as #conta_3

* "Advanced search" or "all months"

* Handle negatives in display/parse decimals

* Incorporate account types into a catchy name

* Assets: Bens e Direitos
* Expenses: Despesas
* Liabilities: Obrigações
* Income: Receitas
* Equity: Patrimônio Líquido

Transaction types:

* Despesa (Expense) [Debit Exp/Liab, Credit Asset/Liab]
* Receita (Income)  [Debit Asset,    Credit Inc]
* Definir bens (New asset) [Debit Asset, Credit Equity]
* Transferir bens   [Debit/Credit Asset]
* Outro (Other)     [Debit/Credit any]

Actions from Account summary,

Auto-fill current account on correct side

* Tipo bens: [Transferir] [Nova despesa] [Nova receita]
* Tipo despesa: [Nova despesa]
* Tipo obrigação: [Nova despesa] [Pagar obrigação]
* Tipo receita: [Nova receita]
* Tipo patrimônio: [Alterar saldo]

### Menu

See `bootstrap-nav/fixed-top-nav.html`.


## Actions

* Account should have a balance field

* Expense accounts should have a (monthly) budget field, leave 0 to ignore

* Generic page to display transactions table

* Account types are fixed to the 5 above, has a numeric id, display name, and positive or negative sign.

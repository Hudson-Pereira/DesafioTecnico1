Desafio tecnico parte 2 concluido conectado ao MongoDB Local.
Os testes devem ser realizados utilizando o Thunder Client.
Esse crud consiste nas quatro rotas básicas: Create, Read, Update e Delete.
A rota CREATE irá criar os usuários com as informações passadas pelo user, sendo obrigatórias as informações:
Nome
Nick
Senha
Como opcional temos o dado ultimo acesso. E como padrao, a data de criação, sendo gerada automatiamente pelo método Date.now.

A rota READ, irá retornar os dados de todos os itens cadastrados na rota /listar, irá retornar apenas do nome buscado na rota /lista/<nome>,
e os dados solicitados via ID na rota /list/<id>, esta última estando validada para a quantidade de caracteres(24) e retornando os dados apenas quando encontrados.

A rota UPDATE irá alterar os dados na rota /editar/<id>, onde deve validar o ID pelo numero de caracteres(24) e realizar a alteração apenas quando encontrado usuário.

A rota DELETE irá deletar os dados solicitados na rota /delete/<id>, quando encontrado, passando pela mesma validação de caracteres(24) e dados encontrados ou não.

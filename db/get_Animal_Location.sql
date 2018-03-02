select * from animals
where location = (select state from shelterLocation where id = 1) /*SIM3 107C*/
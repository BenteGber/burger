use burgers_db;

insert into burgers (burger_name, devoured)
values ("One Night Stand", true), 
("Zombie Apocalypse", true),
("Superiority Burger", false),
("The Best Burger", false),
("Another Burger", false);

use burgers_db;
select * from burgers;
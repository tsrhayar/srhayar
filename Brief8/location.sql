/*==============================================================*/
/* Nom de SGBD :  MySQL 5.0                                     */
/* Date de cr�ation :  26/04/2020 05:31:49                      */
/*==============================================================*/


drop table if exists Client;

drop table if exists Reservation;

drop table if exists Voiture;

/*==============================================================*/
/* Table : Client                                               */
/*==============================================================*/
create table Client
(
   id                   int not null,
   nom_et_prenom        varchar(254),
   email                varchar(254),
   primary key (id)
);

/*==============================================================*/
/* Table : Reservation                                          */
/*==============================================================*/
create table Reservation
(
   id                   int not null,
   Cli_id               int not null,
   date_d_epart         datetime,
   date_d_arrivee       datetime,
   primary key (id)
);

/*==============================================================*/
/* Table : Voiture                                              */
/*==============================================================*/
create table Voiture
(
   id                   int not null,
   Res_id               int not null,
   nom                  varchar(254),
   climatisation        bool,
   carburants           varchar(254),
   prix                 float,
   primary key (id)
);

alter table Reservation add constraint FK_Association_2 foreign key (Cli_id)
      references Client (id) on delete restrict on update restrict;

alter table Voiture add constraint FK_Association_1 foreign key (Res_id)
      references Reservation (id) on delete restrict on update restrict;


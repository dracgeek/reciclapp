
--CREATE DATABASE AND USE 
CREATE DATABASE reciclApp;
USE reciclApp;


--ROLES TABLE
CREATE TABLE roles
(
    id INT(11) PRIMARY KEY NOT NULL
    AUTO_INCREMENT, 
    rolName VARCHAR
    (50) NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)ENGINE=InnoDB DEFAULT CHARSET=utf8,

    --USERS TABLE
    CREATE TABLE users
    (
        id INT(11) PRIMARY KEY NOT NULL
        AUTO_INCREMENT,
    fullName VARCHAR
        (50) NOT NULL,
    typeDocument VARCHAR
        (20) NOT NULL,
    numberDocument VARCHAR
        (20) NOT NULL,
    mobilePhone INT
        (20) NOT NULL,
    email VARCHAR
        (50) NOT NULL UNIQUE,
    password VARCHAR
        (60) NOT NULL,
    addressHome VARCHAR
        (50) NOT NULL,
    neighborhood VARCHAR
        (50) NOT NULL,
    typeHouse VARCHAR
        (50) NOT NULL,
    membersHome VARCHAR
        (50) NOT NULL,
    role_id INT
        (11),
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_role FOREIGN KEY
        (role_id) REFERENCES roles
        (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

        --COLLECTLOCATIONS TABLE 
        CREATE TABLE collectLocations
        (
            id INT(11) PRIMARY KEY NOT NULL
            AUTO_INCREMENT,
    locationName VARCHAR
            (60) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

            --APPOINTMENTS TABLE
            CREATE TABLE appointments
            (
                id INT(11) PRIMARY KEY NOT NULL
                AUTO_INCREMENT,
    client_id INT
                (11),
    collector_id INT
                (11),
    collectLocation_id INT
                (11),
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_client FOREIGN KEY
                (client_id) REFERENCES users
                (id),
    CONSTRAINT fk_collector FOREIGN KEY
                (collector_id) REFERENCES users
                (id),
    CONSTRAINT fk_collectLocation FOREIGN KEY
                (collectLocation_id) REFERENCES collectLocations
                (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


                --TYPEMATERIALS TABLE
                CREATE TABLE typeMaterials
                (
                    id INT(11) PRIMARY KEY NOT NULL
                    AUTO_INCREMENT,
    typeMaterial VARCHAR
                    (50) NOT NULL,
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


                    --COLLECTS TABLE
                    CREATE TABLE collects
                    (
                        id INT(11) PRIMARY KEY NOT NULL
                        AUTO_INCREMENT,
    quantity INT
                        (50) NOT NULL,
    client_id INT
                        (11),
    typeMaterial_id INT
                        (11),
    appointment_id INT
                        (11),
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_client2 FOREIGN KEY
                        (client_id) REFERENCES users
                        (id),
    CONSTRAINT fk_typeMaterail FOREIGN KEY
                        (typeMaterial_id) REFERENCES typeMaterials
                        (id),
    CONSTRAINT fk_appointment FOREIGN KEY
                        (appointment_id) REFERENCES appointments
                        (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    cod_fisc VARCHAR(255),
    phone_number VARCHAR(255),
    email VARCHAR(255),
    secret VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




SELECT * FROM Users;

--DROP TABLE Users;
-- CreateTable
CREATE TABLE `Plants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `breed` VARCHAR(191) NOT NULL,
    `needsSun` BOOLEAN NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `specialCare` INTEGER NULL,
    `size` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

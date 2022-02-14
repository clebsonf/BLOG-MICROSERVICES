const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

const createPost = async ({title}) => {
    return await prisma.posts.create({
        data: {
           'title': title,
        },
    })
}

const getAll = async () => {
    return await prisma.posts.findMany();
}

module.exports = {createPost,getAll}
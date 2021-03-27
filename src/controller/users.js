const express = require('express');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const getAllUsers = (req, res) => {

    
    const users = [
        {
            id: 1,
            name: 'Jose'
        },
        {
            id: 2,
            name: 'Desi'
        }
    ]
    
  res.json(users)//aqui se puede colocar el status de la peticion a usar
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const createUser = (req, res) => {

    const user = req.body;
    user.id = 86546

    const result = {
        message: 'User Created',
        user
    }
    res.status(201).json(result)
  }

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const updateUser = (req, res) => {

    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const result = {
        message: 'User Update',
        user
    }
    res.json(result)
  }

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
  const updatePartialUser = (req, res) => {
    const {id} = req.params
    const user = req.body

    user.id = id

    const result = {
        message: 'User Update with Patch',
        user
    }
    res.json(result)
}

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

const deleteUser = (req, res) => {
    const { id } = req.params
    const user = req.body

    user.id = id

    const result = {
        message: `User with id: ${id} User: ${user} Deleted`
    }
    res.json(result)    
}  

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    updatePartialUser,
    deleteUser
}
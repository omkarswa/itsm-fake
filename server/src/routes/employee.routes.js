const Employee = require("../models/employee.model");

/**
 * @swagger
 * components:
 *      schemas:
 *          Employee:
 *              type: object
 *              required:
 *                  -name
 *                  -email
 *                  -dept
 *                  -role
 *                  -startDate
 *                  -salary
 *              properties:
 *                  name:
 *                      type: string
 *                      description: 
 *                  email:
 *                      type: string
 *                      format: email
 *                      example: john.doe@example.com
 *                  dept:
 *                      type: string
 *                      example: Engineering
 *                  role:
 *                      type: string
 *                      example: Software Engineer
 *                  startDate:
 *                      type: string
 *                      format: date
 *                      example: 2025-09-01
 *                  salary:
 *                      type: number
 *                      example: 75000
 *                  probationEnd:
 *                      type: string
 *                      format: date
 *                      example: 2025-12-01
 * 
 */

/**
 * @swagger
 * /api/employees:
 *   post:
 *     summary: Create a new employee
 *     tags: [Employees]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Employee'
 *     responses:
 *       201:
 *         description: Employee created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - product_name
 *       properties:
 *         product_id:
 *          type: integer
 *          description: The ID of the product
 *          example: 10
 *         product_name:
 *           type: string
 *           description: The name of the product
 *           example: "Test product"
 *         product_underline:
 *           type: string
 *           description: The underline of the product
 *           example: "Test underline"
 *         product_description:
 *           type: string
 *           description: The description of the product
 *           example: "Test description"
 *         images:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               image_id:
 *                type: integer
 *                description: The ID of the image
 *                example: 1
 *               image_url:
 *                 type: string
 *                 description: The URL of the product image
 *                 example: "https://example.com/image.jpg"
 *               product_id:
 *                type: integer
 *                description: The ID of the product
 *                example: 10
 *         labels:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               label_id:
 *                type: integer
 *                description: The ID of the label
 *                example: 6
 *               label_name:
 *                 type: string
 *                 description: The name of the label
 *                 example: "Test label"
 *               label_image:
 *                 type: string
 *                 description: The URL of the label image
 *                 example: "https://example.com/image.jpg"
 *         categories:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *              category_id:
 *               type: integer
 *               description: The ID of the category
 *               example: 5
 *              category_name:
 *                type: string
 *                description: The name of the category
 *                example: "Test category"
 *              category_description:
 *                type: string
 *                description: The description of the category
 *                example: "Test description"
 *         inventory:
 *           type: object
 *           properties:
 *             inventory_id:
 *              type: integer
 *              description: The ID of the inventory
 *              example: 1
 *             inventory_stock:
 *              type: integer
 *              description: The stock of the product
 *              example: 100
 *             product_id:
 *              type: integer
 *              description: The ID of the product
 *              example: 10
 *         prices:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               price_id:
 *                 type: integer
 *                 description: The ID of the price
 *                 example: 1
 *               price:
 *                 type: number
 *                 description: The price of the product
 *                 example: 10
 *               starting_at:
 *                 type: string
 *                 format: date
 *                 description: The start date of the price
 *               is_campaign:
 *                 type: boolean
 *                 description: Whether the price is a campaign price
 *               ending_at:
 *                 type: string
 *                 format: date
 *                 description: The end date of the price
 *               product_id:
 *                type: integer
 *                description: The ID of the product
 *                example: 10
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     ProductCreate:
 *       type: object
 *       properties:
 *         product_name:
 *           type: string
 *           description: The name of the product
 *           example: "Test product"
 *         product_underline:
 *           type: string
 *           description: The underline of the product
 *           example: "Test underline"
 *         product_description:
 *           type: string
 *           description: The description of the product
 *           example: "Test description"
 *         images:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               image_url:
 *                 type: string
 *                 description: The URL of the product image
 *                 example: "https://example.com/image.jpg"
 *         labels:
 *           type: array
 *           items:
 *             type: integer
 *             description: The ID of the label
 *             example: 6
 *         categories:
 *           type: array
 *           items:
 *             type: integer
 *             description: The ID of the category
 *             example: 5
 *         inventory_stock:
 *           type: integer
 *           description: The stock of the product
 *           example: 100
 *         prices:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *                 description: The price of the product
 *                 example: 100
 *               starting_at:
 *                 type: string
 *                 format: date
 *                 description: The start date of the price
 *               is_campaign:
 *                 type: boolean
 *                 description: Whether the price is a campaign price
 *               ending_at:
 *                 type: string
 *                 format: date
 *                 description: The end date of the price
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     ProductUpdate:
 *       type: object
 *       properties:
 *         product_name:
 *           type: string
 *           description: The name of the product
 *           example: "Test update product"
 *         product_underline:
 *           type: string
 *           description: The underline of the product
 *           example: "Product Underline"
 *         product_description:
 *           type: string
 *           description: The description of the product
 *           example: "Product Description"
 *         images:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               image_id:
 *                 type: integer
 *                 description: The ID of the image
 *                 example: 895
 *               image_url:
 *                 type: string
 *                 description: The URL of the product image
 *                 example: "https://d2dql7oeescq6w.cloudfront.net/100232/1-small-nDPWJ78p9W.webp"
 *         labels:
 *           type: array
 *           items:
 *             type: integer
 *             example: 6
 *         categories:
 *           type: array
 *           items:
 *             type: integer
 *             example: 5
 *         inventory_stock:
 *           type: integer
 *           description: The stock of the product
 *           example: 100
 *         prices:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               price_id:
 *                 type: integer
 *                 description: The ID of the price
 *                 example: 1345
 *               price:
 *                 type: number
 *                 description: The price of the product
 *                 example: 25
 *               starting_at:
 *                 type: string
 *                 format: date
 *                 description: The start date of the price
 *                 example: "2022-02-02"
 *               is_campaign:
 *                 type: boolean
 *                 description: Whether the price is a campaign price
 *                 example: false
 *               ending_at:
 *                 type: string
 *                 format: date
 *                 description: The end date of the price
 *                 example: "2022-12-31"
 */
/**
 * @swagger
 * /products:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get all products, with optional filtering and sorting
 *     parameters:
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *           enum: [økologi, msc]
 *         required: false
 *         description: Label to filter products by
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, high-low, low-high]
 *         required: false
 *         description: Field to sort products by
 *     responses:
 *       200:
 *         description: A list of products that match the search query, filter, and sort order
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed to get products
 */
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get a product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Get single product by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed to get product by ID
 */
/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     summary: Create a new product / Authorization required
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductCreate'
 *     responses:
 *       201:
 *         description: Posted product
 *       500:
 *         description: Failed to post product
 */
/**
 * @swagger
 * /products/{id}:
 *   put:
 *     tags:
 *       - Products
 *     summary: Update a product / Authorization required
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: Product with ID was successfully updated
 *       500:
 *         description: Failed to update product
 */
/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     tags:
 *       - Products
 *     summary: Delete a product / Authorization required
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product with ID deleted
 *       500:
 *         description: Failted to delete product
 */
/**
 * @swagger
 * /products/search:
 *   get:
 *     tags:
 *       - Products
 *     summary: Search products with optional filtering and sorting
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *         description: Search term to find products
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *           enum: [økologi, msc]
 *         required: false
 *         description: Label to filter products by
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, high-low, low-high]
 *         required: false
 *         description: Field to sort products by
 *     responses:
 *       200:
 *         description: A list of products that match the search query, filter, and sort order
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed to get products
 */
/**
 * @swagger
 * /products/authenticated:
 *   get:
 *     tags:
 *       - Products
 *     summary: Get all products, with optional filtering and sorting, for authenticated users / Authorization required
 *     parameters:
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *           enum: [økologi, msc]
 *         required: false
 *         description: Label to filter products by
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, high-low, low-high]
 *         required: false
 *         description: Field to sort products by
 *     responses:
 *       200:
 *         description: A list of products that match the search query, filter, and sort order
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed to get products
 */
/**
 * @swagger
 * /products/authenticated/search:
 *   get:
 *     tags:
 *       - Products
 *     summary: Search for products for authenticated users with optional filtering and sorting / Authorization required
 *     parameters:
 *       - in: query
 *         name: term
 *         schema:
 *           type: string
 *         required: true
 *         description: Search term to find products
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *           enum: [økologi, msc]
 *         required: false
 *         description: Label to filter products by
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           enum: [asc, high-low, low-high]
 *         required: false
 *         description: Field to sort products by
 *     responses:
 *       200:
 *         description: A list of products that match the search term, filter, and sort order
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed to get products
 */
/**
 * @swagger
 * /products/labels:
 *   get:
 *     tags:
 *       - Labels/categories
 *     summary: Get all product labels
 *     responses:
 *       200:
 *         description: A list of all product labels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Failed to get labels
 */
/**
 * @swagger
 * /products/categories:
 *   get:
 *     tags:
 *       - Labels/categories
 *     summary: Get all product categories
 *     responses:
 *       200:
 *         description: A list of all product categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Failed to get categories
 */

import express from 'express'
const router = express.Router()

// 資料庫使用直接使用 mysql 來查詢
import db from '#configs/mysql.js'

// GET - 得到所有資料
router.get('/', async function (req, res) {
  // 分頁 (查詢字串QS: page=2&perpage=5)
  // 預設值 page = 1, perpage = 10
  const page = req.query.page || 1
  const perpage = Number(req.query.perpage) || 10
  const offset = (page - 1) * perpage
  const limit = perpage

  const [rows] = await db.query(
    `SELECT * FROM my_product LIMIT  ${limit} OFFSET ${offset}`
  )
  const products = rows

  // 計算在此條件下總共多少筆(WHERE)
  const [rows2] = await db.query(`SELECT COUNT(*) AS count FROM my_product`)
  const { count } = rows2[0]

  // 計算總頁數
  const pageCount = Math.ceil(count / perpage)

  // 標準回傳JSON
  return res.json({
    status: 'success',
    data: {
      total: count, // 總筆數
      pageCount, // 總頁數
      page, // 目前頁
      perpage, // 每頁筆數
      products,
    },
  })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  // 轉為數字
  const id = Number(req.params.id)

  const [rows] = await db.query('SELECT * FROM my_product WHERE id = ?', [id])
  const product = rows[0]

  return res.json({ status: 'success', data: { product } })
})

export default router

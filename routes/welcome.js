import express from 'express'
const router = express.Router()

// 資料庫使用直接使用 mysql 來查詢
import db from '#configs/mysql.js'

// GET - 得到所有資料
router.get('/', async function (req, res) {
  const [rows] = await db.query('SELECT * FROM customer')
  const customers = rows

  // 標準回傳JSON
  return res.json({
    status: 'success',
    data: { customers },
  })
})

// GET - 得到單筆資料(注意，有動態參數時要寫在GET區段最後面)
router.get('/:id', async function (req, res) {
  const id = Number(req.params.id)
  const [rows] = await db.query('SELECT * FROM customer WHERE id = ?', [id])
  const customer = rows[0]

  // 標準回傳JSON
  return res.json({
    status: 'success',
    data: { customer },
  })
})

export default router

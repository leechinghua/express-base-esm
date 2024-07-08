import { DataTypes } from 'sequelize'

export default async function (sequelize) {
  return sequelize.define(
    'Customer',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      address: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      introduction: {
        type: DataTypes.STRING(1234),
        allowNull: true,
      },
      id_card: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'customer', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}

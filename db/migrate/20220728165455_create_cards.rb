class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.belongs_to :user
      t.string :name
      t.integer :elements

      t.timestamps
    end
  end
end

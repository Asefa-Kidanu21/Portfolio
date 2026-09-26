import  sql  from "../../config/database.js";

export const createContactModel = async (name, email, message) => {
  const result = await sql`
    INSERT INTO contacts
      (name, email, message)
    VALUES
      (${name}, ${email}, ${message})
    RETURNING id, name, email, message, created_at
  `;

  return result[0];
};
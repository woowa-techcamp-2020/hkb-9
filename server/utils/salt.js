const crypto = require('crypto');

function generateRandomHash(length) {
  return crypto
    .randomBytes(length)
    .toString('base64')
    .replace(/[^A-Za-z0-9]/g, '');
}

function createPasswordHash(password) {
  return new Promise((resolve, reject) => {
    try {
      const salt = generateRandomHash(64);
      crypto.pbkdf2(password, salt, 104236, 64, 'sha512', (err, key) => {
        if (err) {
          reject(err);
        }
        resolve({ password: key.toString('base64'), salt });
      });
    } catch (e) {
      reject(e);
    }
  });
}

function verifyPassword(password, passwordHash, salt) {
  return new Promise((resolve, reject) => {
    try {
      crypto.pbkdf2(password, salt, 104236, 64, 'sha512', (err, key) => {
        if (err) {
          reject(err);
        }
        if (key.toString('base64') === passwordHash) {
          resolve(true);
        }
        resolve(false);
      });
    } catch (e) {
      resolve(false);
    }
  });
}

module.exports = {
  createPasswordHash,
  verifyPassword,
};

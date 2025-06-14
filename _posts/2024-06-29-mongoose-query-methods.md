---
layout: post
title: "Mongoose Query Methods: Complete Guide with Examples"
description: "Learn Mongoose query methods like deleteMany, find, updateOne, and more. Practical examples for MongoDB operations. Boost your Node.js skills today."
author: "Ritu Raj Pratap Singh"
categories: Guide
tags: [MongoDB, Mongoose, Query]
---

**Master MongoDB operations** using [Mongoose](https://mongoosejs.com/docs/guide.html), the popular [Object Data Modeling](https://mongoosejs.com/docs/schematypes.html) (ODM) library for [Node.js](https://nodejs.org/docs/latest/api/). This guide covers **15 essential query methods** with real-world examples to help you interact with databases efficiently.

## 1. deleteMany()
**Delete multiple documents** matching criteria.
```javascript
await BlogPost.deleteMany({ status: 'draft' });
```
**Use case**: Bulk-clean outdated records.

## 2. deleteOne()
**Remove first matching document**.
```javascript
await User.deleteOne({ email: 'inactive@test.com' });
```
**Tip**: Safer than deleteMany for single document removal.

## 3. find()
**Retrieve multiple documents** with filtering.
```javascript
const activeUsers = await User.find({ isActive: true });
```
**Pro tip**: Chain `.limit(10)` for pagination.

## 4. findById()
**Fetch single document** using ID.
```javascript
const post = await BlogPost.findById('5f8d0d55b54764421b4396e8');
```
**Essential for**: Single resource retrieval.

## 5. findByIdAndDelete()
**Find by ID and delete** in one operation.
```javascript
const deletedItem = await Product.findByIdAndDelete(productId);
```
**Returns**: The deleted document.

## 6. findByIdAndRemove()
**Legacy method** similar to findByIdAndDelete.
```javascript
const removedUser = await User.findByIdAndRemove(userId);
```
**Note**: Prefer `findByIdAndDelete` for new projects.

## 7. findByIdAndUpdate()
**Update document** by ID with options.
```javascript
const updatedPost = await BlogPost.findByIdAndUpdate(
  postId,
  { $set: { title: 'New Title' } },
  { new: true }
);
```
**Key option**: `{ new: true }` returns updated document.

## 8. findOne()
**Get first matching document**.
```javascript
const admin = await User.findOne({ role: 'admin' });
```
**Use case**: Unique field lookups (`email`, `username`).

## 9. findOneAndDelete()
**Find and delete** first match.
```javascript
const deletedComment = await Comment.findOneAndDelete({
  spam: true
});
```
**Ideal for**: Conditional single deletions.

## 10. findOneAndReplace()
**Replace entire document**.
```javascript
const replacedDoc = await Profile.findOneAndReplace(
  { userId: '123' },
  newProfileData
);
```
**Warning**: Replaces all fields except `_id`.

## 11. findOneAndUpdate()
**Update specific fields** in first match.
```javascript
const updatedOrder = await Order.findOneAndUpdate(
  { status: 'pending' },
  { $set: { status: 'processed' } },
  { returnDocument: 'after' }
);
```
**Best practice**: Use $set operator for partial updates.

## 12. replaceOne()
**Replace first matching document**.
```javascript
await Product.replaceOne(
  { sku: 'OLD123' },
  newProductData
);
```
**Difference from update**: Replaces entire document.

## 13. updateMany()
**Bulk update documents**.
```javascript
await User.updateMany(
  { lastLogin: { $lt: '2023-01-01' } },
  { $set: { status: 'inactive' } }
);
```
**Caution**: Always test with `find()` first.

## 14. updateOne()
**Update first matching document**.
```javascript
await Post.updateOne(
  { slug: 'old-post' },
  { $set: { slug: 'new-post' } }
);
```
**Safer than**: updateMany for single document edits.

## Best Practices for Mongoose Queries
1. **Always validate input** before database operations
2. **Use transactions** for critical operations
3. **Index frequently queried fields**
4. **Handle errors** with `try/catch` blocks
5. **Sanitize user input** to prevent NoSQL injection
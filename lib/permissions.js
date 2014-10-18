ownsNotDeleted = function(userId, doc) {
	if ((doc && doc.adminId === userId) && (doc.deleted !== true)) {
		return true;
	
	}
}

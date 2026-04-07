import multer from 'multer';

// 2MB file size limit
const MAX_FILE_SIZE = 2 * 1024 * 1024;

// Accept only PDF and DOCX files
const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
	if (file.mimetype === 'application/pdf' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
		cb(null, true);
	} else {
		cb(new Error('Only PDF and DOCX files are allowed.'));
	}
};

export const upload = multer({
	limits: { fileSize: MAX_FILE_SIZE },
	fileFilter,
});

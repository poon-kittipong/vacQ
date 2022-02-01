/**
 * @desc    Get all hospitals
 * @route   GET /api/v1/hospitals
 * @access  Public
 */
exports.getHospitals = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get all hospitals" });
};

/**
 * @desc    Get a hospital with id provided.
 * @route   GET /api/v1/hospitals/:id
 * @access  Public
 */
exports.getHospital = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show hospital : ${req.params.id}` });
};

/**
 * @desc    Create new hospitals
 * @route   POST /api/v1/hospitals
 * @access  Private
 */
exports.createHospital = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create new hospitals` });
};

/**
 * @desc    Update hospital
 * @route   PUT /api/v1/hospitals/:id
 * @access  Private
 */
exports.updateHospital = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update hospital : ${req.params.id}` });
};

/**
 * @desc    Delete hospital
 * @route   DELETE /api/v1/hospitals/:id
 * @access  Private
 */
exports.deleteHospital = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete hospital : ${req.params.id}` });
};

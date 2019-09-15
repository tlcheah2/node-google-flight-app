
const airRouteModel = require('../models/air_routes');

exports.searchFlight =  async (req, res, next) => {
    const { from, to } = req.body;
    try {
        // Return routes with matching origin and destination
        const result = await airRouteModel.aggregate([
            // Filter air routes based on origin and destination
            {
                $match: {
                    src_airport: from,
                    dst_airport: to
                }
            },
            // Find out their airlines under which alliances
            {
                $lookup: {
                    from: 'air_alliances', // Lookup from
                    let: { airline: '$airline.name' },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $in: ['$$airline', '$airlines'],
                                }
                            }
                        }
                    ],
                    as: 'air_alliance'
                }
            },
            // Here we're  assuming 1 airline can be under 1 air_alliances only
            // Thus, I use unwind to turn air_alliance from array to object
            {
                $unwind: {
                    path: '$air_alliance',
                    preserveNullAndEmptyArrays: true
                }
            },
            // Lastly, format the output that u want to return to frontend.
            {
                $project: {
                    _id: 0,                
                    'air_alliance._id': 0,
                    'air_alliance.airlines': 0
                }
            }
        ]);
        res.json({ data: result})
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
/** @format */

const catchAsyncErrors = require('../middleware/cacheAsyncError');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
	const paymentIntent = await stripe.paymentIntents.create({
		amount: req.body.amount,
		currency: 'usd',

		metadata: { company: 'JP Shop' },
	});

	res.status(200).json({
		success: true,
		client_secret: paymentIntent.client_secret,
	});
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
	res.status(200).json({
		stripeApiKey: process.env.STRIPE_API_KEY,
		message: `Stripe API key sent to ${stripeApiKey}`,
	});
});

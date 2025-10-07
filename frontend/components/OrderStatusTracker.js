export default function OrderStatusTracker({ status }) {
  const steps = ['Pending', 'Processing', 'Shipped', 'Delivered'];
  const currentStep = steps.indexOf(status);

  return (
    <div className="flex space-x-4">
      {steps.map((step, idx) => (
        <div key={idx} className="flex-1 text-center">
          <div className={`w-8 h-8 mx-auto rounded-full ${idx <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'} flex items-center justify-center`}>
            {idx + 1}
          </div>
          <div className="mt-1 text-sm">{step}</div>
        </div>
      ))}
    </div>
  );
}


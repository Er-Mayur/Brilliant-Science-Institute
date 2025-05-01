import React, { useState } from "react";
import { FlaskConical } from 'lucide-react';

const AddressMap = () => {
  // shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
      <div className="rounded-lg overflow-hidden shadow-lg h-100 bg-white flex flex-wrap items-center justify-center">
        <div className="text-center p-6">
          <FlaskConical className="h-16 w-16 mx-auto text-brilliant-blue mb-4" />
          <p className="text-gray-500">Interactive map would be displayed here</p>
          <p className="text-brilliant-blue font-medium mt-2">Brilliant Science Institute Plot no 2 Pankaj Nagar, Chopda, India, Maharashtra</p>
        </div>
        <iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=plot%20no%202%20pankaj%20nagar%20chopda,%20Chopda,%20India,%20Maharashtra+(Brilliant%20Science%20Institute)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a></iframe>
      </div>
    </div>
  </section>
   
  );
}

export default AddressMap;
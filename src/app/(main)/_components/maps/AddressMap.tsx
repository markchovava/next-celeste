"use client"

export default function AddressMap() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.269068978358!2d31.091278874251497!3d-17.82601718313785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb3b3d565b61%3A0xe25f735ce9c2881f!2sMAYO%20PLACE!5e0!3m2!1sen!2szw!4v1774869964929!5m2!1sen!2szw"
        width="1600"
        height="560"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
    </div>
  );
};




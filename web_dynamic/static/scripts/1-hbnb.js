$(document).ready(function() {
  const amenities = {};

  $('input[type="checkbox"]').change(function() {
    const amenityId = $(this).parent('li').data('id');
    const amenityName = $(this).parent('li').data('name');

    if ($(this).is(':checked')) {
      amenities[amenityId] = amenityName;
    } else {
      delete amenities[amenityId];
    }

    const checkedAmenities = Object.values(amenities).join(', ');
    $('.amenities-list').html('<li>' + checkedAmenities + '</li>');
  });
});


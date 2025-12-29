import { NextResponse } from "next/server";

export async function GET() {
  try {
    const placeId = "ChIJxw16Xu8dD0gRSzAxu-imWa0";
    const apiKey = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

    // Récupérer les détails du lieu avec les avis
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}&language=fr`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des avis");
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Google API Error: ${data.status}`);
    }

    return NextResponse.json({
      reviews: data.result.reviews || [],
      rating: data.result.rating || 0,
      user_ratings_total: data.result.user_ratings_total || 0,
    });
  } catch (error) {
    console.error("Erreur API reviews:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des avis", reviews: [] },
      { status: 500 }
    );
  }
}
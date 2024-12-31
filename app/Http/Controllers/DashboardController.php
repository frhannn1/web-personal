<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\About;

class DashboardController extends Controller
{
    public function about(){
        $items = About::all();
        return response()->json($items);
    }
}

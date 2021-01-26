<?php

namespace App\Http\Controllers;
use Illuminate\Contracts\View\View;

class SpaController extends Controller
{
    /**
     *
     * Return view for spa.
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function index(): View
    {
        return view('spa');
    }
}

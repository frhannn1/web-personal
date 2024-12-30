<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('About',function(Blueprint $table){
            $table->id();
            $table->string('desc_singkat');
            $table->longText('About');

        });

        Schema::create('Experience', function(Blueprint $table){
            $table->id();
            $table->string('judul');
            $table->longText('detail');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('About');
        Schema::dropIfExists('Experience');

    }
};

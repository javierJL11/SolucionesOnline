<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('idService')->unsigned();
            $table->foreign('idService')->references('id')->on('services');

            $table->unsignedBigInteger('idWriter')->unsigned();
            $table->foreign('idWriter')->references('id')->on('users');

            $table->unsignedBigInteger('idReciever')->unsigned();
            $table->foreign('idReciever')->references('id')->on('users');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chats');
    }
}

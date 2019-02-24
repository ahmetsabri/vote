<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $guarded = [];

    public function voteresult()
    {
      return $this->hasOne('App\VoteResult');
    }
}
